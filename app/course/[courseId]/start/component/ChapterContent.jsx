import React from "react";
import YouTube from "react-youtube";
import Markdown from 'react-markdown'
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};
const ChapterContent = ({ chapter, content }) => {
  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.name}</h2>
      <p className="text-gray-500">{chapter?.about}</p>
      {/* display video  */} 
      <div className="flex justify-center items-center mt-5">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>
      {/* content  */}
      <div>
{
    content?.content?.chapters?.map((item,index)=>{
        return <div className="p-5 bg-sky-50 mb-3 rounded-lg mt-3 rounded-md">
            <h2 className="font-medium text-lg">{item.title}</h2>
            <Markdown>{item.explanation}</Markdown>
    {/* <p className="text-gray-500 text-sm whitespace-pre-wrap">{item.explanation}</p> */}
       {item.code_example && <div className="bg-black text-white p-4 mt-3">
          <pre>
            <code>{item.code_example}</code>
          </pre>
        </div>}
        </div>
    })
}
      </div>
    </div>
  );
};

export default ChapterContent;
