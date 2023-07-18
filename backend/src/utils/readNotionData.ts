// import { NotionDBLoader } from "langchain/document_loaders/web/notiondb";
// import { CharacterTextSplitter } from 'langchain/text_splitter'

// const readNotionData = async (notionURL: string) => {
//     console.log(notionURL);
    
//     const loader = new NotionDBLoader({
//     pageSizeLimit: 10,
//     databaseId: notionURL,
//     notionIntegrationToken: "secret_1rp0z4QgxJKfJuvJq50O7r5baC5XINPmMQRip4QToBo", // Or set as process.env.NOTION_INTEGRATION_TOKEN
//     });
//     const docs = await loader.load();

//     const textSplitter = new CharacterTextSplitter({
//         chunkSize: 1000,
//         chunkOverlap: 0
//     })
//     const texts = await textSplitter.splitDocuments(docs)
//     console.log("notion data");
//     return { texts }
// }


import { NotionLoader } from "langchain/document_loaders/fs/notion";
import { CharacterTextSplitter } from 'langchain/text_splitter'

const readNotionData = async (notionURL: string) => {
    /** Provide the directory path of your notion folder */
    const directoryPath = "./Notion_DB";
    const loader = new NotionLoader(directoryPath);
    const docs = await loader.load();
    console.log({ docs });
    const textSplitter = new CharacterTextSplitter({
        chunkSize: 1000
    })
    const texts = await textSplitter.splitDocuments(docs)
    console.log("notion data");
    return { texts }
};

export { readNotionData }