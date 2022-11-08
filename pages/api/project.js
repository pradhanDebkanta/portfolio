import { personalProjects, contributeProject } from "../../server/db/projectList"
import { pagination } from "../../server/helper/project";

async function handler(req, res) {
  if (req.method === "GET") {
    const { projectType, pageNo = 1, perPageItem = 5, token } = req?.query;

    if (token === undefined || token !== process.env.NEXT_PUBLIC_API_TOKEN) {
      return res.status(401).json({ error: 'unAuthorized request!' });
    }

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
  } else {
    res.status(405).json({ error: 'invalid method!' })
  }
}

export default handler;