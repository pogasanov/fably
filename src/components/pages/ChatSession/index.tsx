import { Container } from "@/components/shared/ui";
import { Chat } from "@/components/widgets/Chat";
import { Layout } from "@/components/widgets/Layout";

export const ChatSession = () => {
  return (
    <Layout>
      <Container>
        <div className="flex">
          <div className="grow-[2]">
            <Chat/>
          </div>

          <div className="grow-[1]">
            Images
          </div>
        </div>
      </Container>
    </Layout>
  )
}