import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAavatarProps {
    imageUrl?: string;
    fallBack?: string;
}

export const UserAvatar = ({ imageUrl, fallBack }: UserAavatarProps) => {
    return (
        <Avatar className="size-8 md:size-10">
            <AvatarImage src={imageUrl} />
            <AvatarFallback className="">{fallBack}</AvatarFallback>
        </Avatar>
    )
}
