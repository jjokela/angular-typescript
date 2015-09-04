using System.Web.Mvc;
using AngularAndTypeScriptExample.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AngularAndTypeScriptExample.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
