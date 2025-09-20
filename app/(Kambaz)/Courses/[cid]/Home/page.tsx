import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default async function Home({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  return (
    <div id="wd-home">
      <table>
        <tbody>
          <tr>
            <td valign="top" width="70%"> <Modules params={Promise.resolve({ cid })} /> </td>
            <td valign="top"> <CourseStatus /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
