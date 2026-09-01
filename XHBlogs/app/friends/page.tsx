import Navbar from '../../components/Navbar';
import PageTransition from '../../components/PageTransition';
import FriendsBoard from './FriendsBoard';
import {siteConfig} from "@/siteConfig";

export const metadata = {
  title: "友链 | " + siteConfig.title,
  description: "开发者链接与实用资源",
};

export default function FriendsPage() {
  return (
    <div className="min-h-screen relative pb-20">
      <Navbar />
      <PageTransition>
        <div className="mt-28">
          <FriendsBoard />
        </div>
      </PageTransition>
    </div>
  );
}