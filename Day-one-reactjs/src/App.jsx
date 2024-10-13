import PostList from "./comppnents/PostList";
import MainHeader from "./comppnents/MainHeader";
import { useState } from "react";
export default function App() {
  const [modalVisble, setModalVisible] = useState(false);
  function hideModalHandler() {
    setModalVisible(false);
}
function showModalHandler(){
  setModalVisible(true);
}
  return (

    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList isPosting={modalVisble} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}
