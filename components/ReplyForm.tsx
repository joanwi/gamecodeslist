import { useState } from "react";

export default function ReplyForm({
  parentId,
  parentUserName,
  game,
  onClose,
}: {
  parentId: string;
  parentUserName: string;
  game: string;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    formData.append("parent_id", parentId);
    formData.append("game", game);
    try {
      await fetch("/api/comments", {
        method: "POST",
        body: formData,
      });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form action={handleSubmit} className="bg-white p-4 rounded-lg shadow-sm">
      <label className="block text-xl font-semibold text-gray-800">
        Add new comment
      </label>
      <input
        type="text"
        name="content"
        className="w-full px-4 py-3 border rounded-lg"
        placeholder="Share your thoughts..."
        defaultValue={`@${parentUserName} `}
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
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium mt-7">
          {isSubmitting ? "Submitting..." : "Post"}
        </button>
      </div>
    </form>
  );
}
