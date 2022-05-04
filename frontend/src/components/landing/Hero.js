const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section class='masthead'>
        <div class='container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center'>
          <div class='d-flex justify-content-center'>
            <div class='text-center'>
              <h1 class='mx-auto my-0 text-uppercase'>Black Iron Strength</h1>
              <h2 class='text-white-50 mx-auto mt-2 mb-5'>
                Welcome to Black Iron Strength
              </h2>
              <h4 class='text-white-50 mx-auto mt-2 mb-5'>
                Where you find the best equipment at the best prices
              </h4>
              <a class='btn btn-secondary' href='#about'>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Getting started */}
      {/* TODO add white cards here -> commercial / home */}
      <section class='about-section text-center' id='about'>
        <div class='container px-4 px-lg-5 pt-5'>
          <div class='row gx-4 gx-lg-5 justify-content-center'>
            <div class='col-lg-8'>
              <h2 class='text-white mb-4'>
                We have equipment to fit all your needs.
              </h2>
              <p class='text-white-50'>
                Whether you are a gym owner or a garage warrior, we got you
                covered. Check out our large selection of equipment ranging from
                barbells & Weight to full on training systems.
              </p>
            </div>
          </div>
          {/* Product types */}
          <section class='product-section pb-5'>
            <div class='row gx-4 gx-lg-5 justify-content-center'>
              <div role='button' class='col-md-4 mb-3 mb-md-0 cursor-pointer'>
                <div class='card py-4 h-100'>
                  <div class='card-body text-center'>
                    <i class='fas fa-map-marked-alt text-primary mb-2'></i>
                    <h4 class='text-uppercase m-0'>Commercial</h4>
                    <hr class='my-4 mx-auto' />
                    <div class='small text-black-50'>
                      For more than 5 pieces of equipment
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-4 mb-3 mb-md-0 cursor-pointer'>
                <div role='button' class='card py-4 h-100'>
                  <div class='card-body text-center'>
                    <i class='fas fa-mobile-alt text-primary mb-2'></i>
                    <h4 class='text-uppercase m-0'>Personal</h4>
                    <hr class='my-4 mx-auto' />
                    <div class='small text-black-50'>
                      For 5 pieces of equipment or less
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <img class='img-fluid' src='/images/ipad.png' alt='...' /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
