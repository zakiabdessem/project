"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ls from "@/lib/localStorage";

export default function Home() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<
    {
      role: string;
      content: string;
    }[]
  >([]);

  useEffect(() => {
    // Load chat from localStorage on client-side only
    const savedChat = ls.getFromLs("chat");
    if (savedChat) {
      setChat(savedChat);
    }
  }, []); // Run only on component mount (client-side)

  const handleSubmit = async () => {
    if (!input.trim()) return;

    try {
      const response = await axios.post(
        "https://api.chatpdf.com/v1/chats/message",
        {
          sourceId: "src_2O45QXwXLJCuuOtYngG71",
          messages: [
            {
              role: "user",
              content: `Your role is a school assistant chatbot designed to answer common student questions, including navigating potential name misspellings, while strictly not using general knowledge. Please keep responses concise and only in English. How would you address this situation: ${input.trim()}?`,
            },
          ],
        },
        {
          headers: {
            "x-api-key": "sec_muNINkvtYZ19siD33fyaCOdR9BcBhNDO",
          },
        }
      );

      const botResponse = {
        role: "bot",
        content: response.data.content,
      };

      const updatedChat = [
        ...chat,
        { role: "user", content: input.trim() },
        botResponse,
      ];

      setChat(updatedChat);
      setInput("");

      // Save chat to localStorage
      ls.setToLs("chat", JSON.stringify(updatedChat));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-end px-24 py-6">
      <div className="py-5">
        {chat.map(
          (
            message: {
              role: string;
              content: string;
            },
            index
          ) => (
            <div
              key={index}
              className={`flex gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}>
              <div
                className={`p-2  my-3 ${
                  message.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-black rounded-bl-none"
                } rounded-lg`}>
                {message.content}
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex justify-center items-center gap-2">
        <Input
          value={input}
          placeholder="Ask me anything ..."
          className="w-full ring-0"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          className="focus:ring-0 focus:ring-offset-0"
          variant="outline">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/forma-light/24/sent.png"
            alt="sent"
          />
        </Button>
      </div>
    </main>
  );
}
