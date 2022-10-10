// import { personalProjects, contributeProject } from "../../server/db/projectList"
// import { pagination } from "../../server/helper/project";

// async function handler(req, res) {
//   const { projectType, pageNo = 1, perPageItem = 5 } = req?.query;
//   console.log("dkkkkkkkkkkkk")

//   if (req.method === "GET") {
//     if (projectType === "personal") {
//       const projects = pagination(pageNo, perPageItem, personalProjects);
//       const pProject = {
//         projects,
//         totalItem: personalProjects.length
//       }
//       res.status(200).json(JSON.stringify(pProject));
//     } else if (projectType === "contribute") {
//       const projects = pagination(pageNo, perPageItem, contributeProject);
//       const cProject = {
//         projects,
//         totalItem: contributeProject.length
//       }
//       res.status(200).json(JSON.stringify(cProject));
//     } else {
//       res.status(400).json({ message: "invalid request." });
//     }
//   }
// }

async function handler(req, res) {
  res.status(200).json({ name: 'okk' });
}
export default handler;