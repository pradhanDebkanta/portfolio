import { personalProjects, contributeProject } from "../../db/projectList"

export default function handler(req, res) {
  const { projectType, pageNo = 1, perPageItem = 5 } = req?.query;

  if (req.method === "GET") {
    if (projectType === "personal") {
      const projects = pagination(pageNo, perPageItem, personalProjects);
      const pProject = {
        projects,
        totalItem: personalProjects.length
      }
      res.status(200).json(JSON.stringify(pProject));
    } else if (projectType === "contribute") {
      const projects = pagination(pageNo, perPageItem, contributeProject);
      const cProject = {
        projects,
        totalItem: contributeProject.length
      }
      res.status(200).json(JSON.stringify(cProject));
    } else {
      res.status(400).json({ message: "invalid request." });
    }
  }
}

function pagination(pageNo, itemPerPage, arr) {
  let items = [];
  if ((pageNo * itemPerPage) <= arr.length) {
    items = arr.slice((pageNo - 1) * itemPerPage, pageNo * itemPerPage);
  } else {
    items = arr.slice((pageNo - 1) * itemPerPage, arr.length);
  }
  return items;

}
