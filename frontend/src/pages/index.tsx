import { NextPage } from "next"
import { Box, Button, Center, HStack, Heading, Icon, Input, Stack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { BiBookAdd } from "react-icons/bi"
import { BsFillPatchQuestionFill } from "react-icons/bs"

const Home: NextPage = () => {
  const [documentUrl, setDocumentUrl] = useState<string>("")
  const [docResponse, setDocResponse] = useState<string>("")

  const [prompt, setPrompt] = useState("")
  const [reply, setReply] = useState("")

  const [documentIsLoading, setDocumentIsLoading] = useState(false)
  const [replyIsLoading, setReplyIsLoading] = useState(false)

  const loadDocument = async () => {
    setDocumentIsLoading(true)
    const body = JSON.stringify({ url: documentUrl })
    if (documentUrl.includes("github")) {
      console.log("github")
      const res = await fetch(`http://localhost:8080/api/load-github`, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.status === 200) {
        setDocResponse("Successfully Parsed the Document!")
      } else {
        setDocResponse("Error loading document. Please try again")
      }
    }
    if (documentUrl.includes("docs")) {
      console.log("docs")
      const res = await fetch(`http://localhost:8080/api/load-docs`, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.status === 200) {
        setDocResponse("Successfully Parsed the Document!")
      } else {
        setDocResponse("Error loading document. Please try again")
      }
    } else {
      console.log("notion")
      const res = await fetch(`http://localhost:8080/api/load-notion`, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.status === 200) {
        setDocResponse("Successfully Parsed the Document!")
      } else {
        setDocResponse("Error loading document. Please try again")
      }
    }
    setDocumentIsLoading(false)
  }

  const queryDocument = async (prompt: string) => {
    setReplyIsLoading(true)
    const body = JSON.stringify({ prompt })
    const res = await fetch(`http://localhost:8080/api/query`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
    const answer = await res.json()
    console.log(answer)
    setReply(answer.response.text)
    setReplyIsLoading(false)
  }

  return (
    <Box px={8} py={8} h={"100vh"} bgColor={"#242424"} color={"white"} fontFamily={"Manrope"}>
      <Heading textAlign={"center"} fontFamily={"Jura"} fontSize={"6xl"}>
        Catalyst
      </Heading>
      <HStack align={"center"} justify={"center"} py={16} spacing={"24"}>
        <Stack border={"1px"} borderColor={"#EB7B47"} borderRadius={"md"} padding={"10"} bgColor={"#15151F"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>
            {" "}
            Notion, Gitbook, Github{" "}
          </Text>
          <Text>{`Enter the URL`}</Text>
          <Input value={documentUrl} onChange={({ target }) => setDocumentUrl(target.value)} />
          <Button isLoading={documentIsLoading} onClick={loadDocument} disabled={!prompt} bgColor={"#EB7B47"}>
            Add
          </Button>
          {docResponse && <Text>{docResponse}</Text>}
          <Text pt={6}>{`How can I help ❔`}</Text>
          <Input value={prompt} onChange={({ target }) => setPrompt(target.value)} />
          <Button
            isLoading={replyIsLoading}
            onClick={() => queryDocument(prompt)}
            disabled={!prompt}
            bgColor={"#EB7B47"}
          >
            Query
          </Button>
          {reply && <Text>{reply}</Text>}
        </Stack>
      </HStack>
    </Box>
  )
}

export default Home
