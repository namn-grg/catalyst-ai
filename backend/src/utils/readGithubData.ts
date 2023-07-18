import { GithubRepoLoader } from "langchain/document_loaders/web/github";
import { CharacterTextSplitter } from 'langchain/text_splitter'

const readGithubData = async (githubUrl: string) => {
    const loader = new GithubRepoLoader(
        githubUrl,
        { branch: "master", recursive: true, unknown: "warn", ignorePaths: ["yarn.lock", "package-lock.json", "remappings.txt", ".gitignore"] }
      );

    const docs = await loader.load();
    const textSplitter = new CharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 0
    })
    const texts = await textSplitter.splitDocuments(docs)
    console.log("github data");
    return { texts }
}

export { readGithubData }