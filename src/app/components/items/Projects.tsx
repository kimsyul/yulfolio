import Wrapper from '../layout/Wrapper';

const Projects = () => {
  return (
    <section>
      <Wrapper>
        <h1 className="text-4xl font-bold pb-2 pt-4 text-center">Projects</h1>
        <div className="pt-4 pb-10">
          <div className="outline-dashed outline-primary rounded-2xl flex flex-col justify-center items-center py-10 px-20">
            <section className="flex flex-col gap-4 ">
              <span className="text-neutral text-3xl font-black">HTML & CSS</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="card bg-base-100 w-30 shadow-xl">
                  <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Coupang - 오늘의 발견</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-sm btn-neutral">자세히 보기</button>
                      <a
                        href="https://github.com/kimsyul/Coupang-Discovery_of_the_Day"
                        className="btn btn-sm btn-neutral">
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 w-30 shadow-xl">
                  <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-sm btn-neutral">자세히 보기</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
