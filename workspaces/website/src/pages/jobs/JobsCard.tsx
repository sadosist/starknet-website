import { ListCard } from "@ui/Card/ListCard";
import { JobsHit } from "./JobsPage";
import moment from "moment";

export default function JobsCard({ hit }: { hit: JobsHit }) {
  let tags: string[] = [];
  if (hit.job?.role) tags.push(hit.job.role);
  if (hit.job?.type) tags.push(hit.job.type);
  if (hit.job?.location) tags.push(hit.job.location);

  return (
    <ListCard
      variant="job"
      startDateTime={`${hit.contact?.name} - ${moment(hit.published_at).format('DD MMM, YYYY')}`}
      image={hit.contact?.logo}
      title={hit.job?.title}
      description={hit.job?.description}
      type={tags}
      href={hit.job?.apply_url || ""}
    />
  );
}
