
export default function Services() {
  return (
    <article className="w-full rounded border-2 p-3">
      <div className="mb-3 flex justify-between rounded bg-green-200 py-2 md:py-4">
        <p className="px-3 md:px-5">API</p>
        <p className="px-3 md:px-5">Operational</p>
      </div>
      <div className="mb-3 flex justify-between rounded bg-green-200 py-2 md:py-4">
        <p className="px-3 md:px-5">CDN</p>
        <p className="px-3 md:px-5">Operational</p>
      </div>
      <div className="mb-3 flex justify-between rounded bg-green-200 py-2 md:py-4">
        <p className="px-3 md:px-5">DNS</p>
        <p className="px-3 md:px-5">Operational</p>
      </div>
      <div className="flex justify-between rounded bg-green-200 py-2 md:py-4">
        <p className="px-3 md:px-5">Site delivery</p>
        <p className="px-3 md:px-5">Operational</p>
      </div>
    </article>
  )
}
