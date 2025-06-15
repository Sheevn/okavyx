import { Tweet } from 'react-tweet'
import { getTweetIds } from '@/lib/x'

export default async function XPostsPage() {
  const tweetIds = await getTweetIds()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex max-w-xl flex-col gap-8">
        {tweetIds.length > 0 ? (
          tweetIds.map((id) => <Tweet key={id} id={id} />)
        ) : (
          <p className="text-center">
            Could not retrieve tweets at this time. Please try again later.
          </p>
        )}
      </div>
    </main>
  )
} 