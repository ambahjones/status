export interface PostProps {
  title?: string
  content?: string
}

function Post({ title, content }: PostProps) {
  return (
    <article className="container mx-auto">
      <h2 className="font-bold">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
    </article>
  )
}

export interface ChangelogsProps {
  posts: any
}

export default function Changelog({ posts }: ChangelogsProps) {
  return (
    <section className="pb-6">
      <h1 className="text-center text-3xl">Changelog</h1>
      <h2 className="mt-8 mb-1 text-lg font-bold">February 2022</h2>
      {posts.map((post: any, i: number) => {
        return (
          <Post
            key={i}
            title={post.title.rendered}
            content={post.content.rendered}
          />
        )
      })}
    </section>
  )
}

Changelog.defaultProps = {
  posts: [],
}
