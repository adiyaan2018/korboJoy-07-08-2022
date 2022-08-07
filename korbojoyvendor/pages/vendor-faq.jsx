import useScript from "../commonFunction/ReloadJs";

const VendorFaq = () => {
  useScript("/assets/js/app.js");
  return (

    <div className="page-wrapper">
      <main className="main">
        <div className="page-content faq">
          <div className="col-12 col-lg-12">
            <div className="card card-statistics">
              <div className="card-header">
                <div className="card-heading">
                  <h4 className="card-title">Faq for Korbo Joy</h4>
                </div>
              </div>
              <div className="card-body">
                <div className="accordion" id="accordionborderradius">
                  <div className="mb-2 acd-group">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-1" className="btn-block text-left text-muted acd-heading collapsed" data-toggle="collapse" aria-expanded="false">People usually ask these</a>
                      </h5>
                    </div>
                    <div id="collapse4-1" className="collapse" data-parent="#accordionborderradius" >
                      <div className="card-body">
                        <p>Yes, your data is completely secured</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 acd-group">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-2" className="btn-block text-left text-muted acd-heading collapsed" data-toggle="collapse">How do I contact with you?</a>
                      </h5>
                    </div>
                    <div id="collapse4-2" className="collapse" data-parent="#accordionborderradius">
                      <div className="card-body">
                        <p>Feel free to Inbox us, Email us or call us at 01919-880322 for any type of queries.</p>
                      </div>
                    </div>
                  </div>
                  <div className="acd-group border-bottom-0">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-3" className="btn-block  text-left text-muted acd-heading collapsed" data-toggle="collapse">How do I cancel my order?</a>
                      </h5>
                    </div>
                    <div id="collapse4-3" className="collapse" data-parent="#accordionborderradius">
                      <div className="card-body">
                        <p>Inbox or call us at 01919-880322 to cancel the order.</p>
                      </div>
                    </div>
                  </div>

                  <div className="acd-group border-bottom-0">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-3" className="btn-block  text-left text-muted acd-heading collapsed" data-toggle="collapse">Do you deliver outside Dhaka?</a>
                      </h5>
                    </div>
                    <div id="collapse4-3" className="collapse" data-parent="#accordionborderradius">
                      <div className="card-body">
                        <p>Yes, we deliver all over Bangladesh via courier service.</p>
                      </div>
                    </div>
                  </div>

                  <div className="acd-group border-bottom-0">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-3" className="btn-block  text-left text-muted acd-heading collapsed" data-toggle="collapse">How much does the shipping cost?</a>
                      </h5>
                    </div>
                    <div id="collapse4-3" className="collapse" data-parent="#accordionborderradius">
                      <div className="card-body">
                        <p>Inside Dhaka Delivery Charge: 70 Taka Applicable. (Courier charge may differ based on package size and courier’s weight-based costing) Outside Dhaka Delivery Charge: 100 Taka (Courier charge may differ based on package size and courier’s weight-based costing.)</p>
                      </div>
                    </div>
                  </div>

                  <div className="acd-group border-bottom-0">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-3" className="btn-block  text-left text-muted acd-heading collapsed" data-toggle="collapse">Do you provide Free Shipping?</a>
                      </h5>
                    </div>
                    <div id="collapse4-3" className="collapse" data-parent="#accordionborderradius">
                      <div className="card-body">
                        <p>Free shipping may be offered only during campaigns or promotional offers.</p>
                      </div>
                    </div>
                  </div>

                  <div className="acd-group border-bottom-0">
                    <div className="card-header border-radius-10 border">
                      <h5 className="mb-0">
                        <a href="#collapse4-3" className="btn-block  text-left text-muted acd-heading collapsed" data-toggle="collapse">Do I receive an invoice for my order?</a>
                      </h5>
                    </div>
                    <div id="collapse4-3" className="collapse" data-parent="#accordionborderradius">
                      <div className="card-body">
                        <p>Yes, an Electronic invoice will be sent to your email every time you order.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorFaq;
