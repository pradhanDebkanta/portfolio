import { personalProjects, contributeProject } from "../../db/projectList"

export default function handler(req, res) {
  const { projectType } = req?.query;
  console.log(projectType)

  if (req.method === "GET") {
    if (projectType === "personal") {
      res.status(200).json(JSON.stringify(personalProjects));
    } else if (projectType === "contribute") {
      res.status(200).json(JSON.stringify(contributeProject))
    } else {
      res.status(400).json({ message: "invalid request." });
    }
  }
}
