import { InfiniteScrollType } from "types/infinite.scroll";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "components/shared/Loader";
import NotFound from "components/NotFound";

// Custom Re-usable Component [Abstraction Below]
const Index: React.FC<InfiniteScrollType> = ({ data, loading, currentPage, totalPage, loadMore, children, endMessageText }): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={data?.length}
      next={loadMore}
      hasMore={loading || currentPage <= totalPage}
      loader={
        <div className="text-center">
          <Loader />
        </div>
      }
      // height={700}
      endMessage={<NotFound text={endMessageText} height={50} width={50} textFont="text-sm" />}
    >
      {/* Component Children Below */}
      {children}
    </InfiniteScroll>
  );
};

export default Index;
