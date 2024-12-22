import { useLoaderData } from "react-router-dom"


export default function ArtifactsDetailsPage() {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>ArtifactsDetailsPage</div>
  )
}
