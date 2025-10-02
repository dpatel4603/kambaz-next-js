import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default async function Home({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
        <Modules params={Promise.resolve({ cid })} />
      </div>
      <div className="d-none d-lg-block">
        <CourseStatus />
      </div>
    </div>
  );
}
