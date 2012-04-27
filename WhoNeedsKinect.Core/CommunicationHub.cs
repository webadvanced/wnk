using SignalR.Hubs;
using SignalR;
using SignalR.Hosting.AspNet;
using WhoNeedsKinect.Core.Model;
namespace WhoNeedsKinect.Core {
    public class CommunicationHub : Hub {
        public static void PushPositionDataToClient(Position position) {
            var connectionMamanger = (IConnectionManager)AspNetHost.DependencyResolver.GetService(typeof(IConnectionManager));
            dynamic clients = connectionMamanger.GetClients<CommunicationHub>();
            clients.renderPosition(position);
        }
    }
}