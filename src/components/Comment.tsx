import { ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";

const Comment = ({ comment }: { comment: any }) => {
  return (
    <div className="flex gap-3 group">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="w-10 h-10 rounded-full flex-shrink-0 border-2 border-primary/20"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-sm">{comment.author}</span>
          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
        </div>
        <p className="text-sm mb-2">{comment.text}</p>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-2 hover:bg-secondary"
          >
            <ThumbsUp className="h-4 w-4" />
            <span className="text-xs">{comment.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-secondary">
            Reply
          </Button>
        </div>
        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-12 mt-4 space-y-4">
            {comment.replies.map((reply: any) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
