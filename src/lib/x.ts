// lib/x.ts

// Define types for the X API responses to ensure our code is type-safe.
type User = {
  data: {
    id: string;
  };
};

type TweetData = {
  id: string;
};

type TweetsResponse = {
  data?: TweetData[];
};

/**
 * Fetches the latest tweet IDs from the @okavyx timeline.
 * This function is cached for 30 minutes to respect the X API rate limits.
 */
export async function getTweetIds(): Promise<string[]> {
  const bearerToken = process.env.X_BEARER_TOKEN;

  if (!bearerToken) {
    throw new Error('X_BEARER_TOKEN is not set in .env.local. Please add it and restart the server.');
  }

  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  };

  try {
    // First, get the user ID for 'okavyx'. We cache this for a day as it won't change.
    const userResponse = await fetch(
      'https://api.twitter.com/2/users/by/username/okavyx',
      {
        headers,
        next: { revalidate: 86400 }, // Cache for 24 hours
      }
    );

    if (!userResponse.ok) {
      console.error(`Failed to fetch user ID: ${userResponse.status} ${await userResponse.text()}`);
      return [];
    }

    const user: User = await userResponse.json();
    const userId = user.data.id;

    // Second, get the latest tweets for that user ID. We cache this for 30 minutes.
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets`,
      {
        headers,
        next: { revalidate: 1800 }, // Cache for 30 minutes
      }
    );

    if (!tweetsResponse.ok) {
      console.error(`Failed to fetch tweets: ${tweetsResponse.status} ${await tweetsResponse.text()}`);
      return [];
    }

    const tweets: TweetsResponse = await tweetsResponse.json();

    // If the API returns tweet data, map over it to return an array of IDs.
    // Otherwise, return an empty array.
    return tweets.data?.map((tweet) => tweet.id) ?? [];

  } catch (error) {
    console.error('An unexpected error occurred while fetching tweet IDs:', error);
    return [];
  }
} 