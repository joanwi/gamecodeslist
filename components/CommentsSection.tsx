"use client";
import { useState} from "react";
import { format } from "date-fns";
import { Comment,GroupedComments } from "@/lib/types";
import ReplyForm from "./ReplyForm";

export default function CommentsSection({
  initialComments,
  game,
}: {
  initialComments: Comment[];
  game: string;
}) {
  const [comments, _] = useState(initialComments);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [showNotice, setShowNotice] = useState(false);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "yyyy-MM-dd HH:mm:ss");
  };

  const handleMainSubmit = async (formData: FormData) => {
    formData.append("game", game);

    const response = await fetch("/api/comments", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 3000);
    }
  };

  const groupedComments = comments.reduce<GroupedComments>((acc, comment) => {
    if (!comment.parent_id) {
      acc[comment._id] = {
        main: comment,
        replies: comments
          .filter((c) => c.root_id === comment._id && c.parent_id !== null)
          .sort(
            (a, b) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
          ),
      };
    }
    return acc;
  }, {});

  
  return (
    <section id="comments" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form
        action={handleMainSubmit}
        className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-xl font-semibold text-gray-800">
          Add new comment
        </label>
        <input
          type="text"
          name="content"
          className="w-full px-4 py-3 border rounded-lg"
          placeholder="Share your thoughts..."
          required
        />
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <label className="block text-xl font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Type your name"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium mt-7">
            Post
          </button>
        </div>
      </form>

      <div className=" mt-4 space-y-4">
        {Object.values(groupedComments)
          .sort(
            (a, b) =>
              new Date(b.main.created_at).getTime() -
              new Date(a.main.created_at).getTime()
          )
          .map((group) => (
            <div key={group.main._id} className="border-b pb-2">
              <p>
                <strong>{group.main.user_name}</strong> -{" "}
                <time>{formatDate(group.main.created_at)}</time>
              </p>
              <div>
                <p>{group.main.content}</p>
                <button
                  onClick={() =>
                    setReplyingTo((prev) =>
                      prev === group.main._id ? null : group.main._id
                    )
                  }
                  className="bg-blue-500 text-white px-2 rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
                  >
                  Reply
                </button>
              </div>
              {replyingTo === group.main._id && (
                <ReplyForm
                  parentId={group.main._id}
                  parentUserName={group.main.user_name}
                  game={game}
                  onClose={() => setReplyingTo(null)}
                />
              )}
              {group.replies.map((reply) => (
                <div key={reply._id} className="ml-8 mt-2">
                  <p>
                    <strong>{reply.user_name}</strong> -{" "}
                    <time>{formatDate(reply.created_at)}</time>
                  </p>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          ))}
        {showNotice && (
          <div className="notice">Your comment is pending approval</div>
        )}
      </div>
    </section>
  );
}
