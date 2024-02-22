import React from "react";


const Carsoul = () => {
  return (<>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.pinimg.com/originals/b6/f8/5f/b6f85fe8fbf86446b314b51d05f27ff1.jpg" height="650px" width="100%" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/originals/3d/1e/03/3d1e03e6d57b72dd063429c676dac234.png" height="650px" width="100%" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/736x/81/d9/5c/81d95cea47357e24a3ec881100df45c0.jpg" height="650px" width="100%" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </>)
}
export default Carsoul