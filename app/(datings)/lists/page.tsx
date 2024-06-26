import {
  getAllLikesByLoginMember,
  getLikedMembers,
} from "@/actions/likeActions";
import ListsTab from "@/components/ListsTab";
import { getUser } from "@/utils/user";

const page = async ({ searchParams }: { searchParams: { type: string } }) => {
  const user = await getUser();
  const likeIds = await getAllLikesByLoginMember(user.id);
  const members = await getLikedMembers(searchParams.type);
  return (
    <div className="h-screen">
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  );
};

export default page;
