using System.Web.Mvc;
using WhoNeedsKinect.Core.Model;
using WhoNeedsKinect.Core;
namespace WhoNeedsKinect.Web.Controllers {
    public class PositionController : Controller {
        [HttpPost] 
        public void Send(Position position) {
             //brodcast the data to the client
             CommunicationHub.PushPositionDataToClient(position);
         }

        public ActionResult List() {
            return View();
        }
    }
}