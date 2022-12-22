const VideoGallery = () => {
  return (

    <div className="flex flex-col w-full bg-[#FFF]">
      <div className="flex justify-center rounded bg-[#3E5062] shadow-lg">
        <div className="w-full p-2 flex flex-col">
          <h5 className="flex bg-[#3E5062] text-white text-m justify-center">Videos</h5>
        </div>
      </div>
      <video class="w-full" autoplay controls>
  <source src="./videos/Prueba.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </div>
  );
};

export default VideoGallery;
