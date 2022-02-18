export interface PostProps {
  title?: string
  content?: string
}

function Post({ title, content }: PostProps) {
  return (
    <article>
      <h3 className="font-bold">{title}</h3>
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
      {posts.map((post, i) => {
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
