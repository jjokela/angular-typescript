using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using AngularAndTypeScriptExample.Models;

namespace AngularAndTypeScriptExample.Controllers
{
    [RoutePrefix("Home")]
    public class HomeController : Controller
    {
        private ConferenceContext db = new ConferenceContext();
        public ActionResult Index()
        {
            // load also Speaker
            var model = db.Conferences
                          .Include(c => c.Speaker)
                          .ToList();
            return View(model);
        }

        [HttpGet]
        [Route("Conference/{id}")]
        public ActionResult Conference(int id)
        {
            var model = db.Conferences
                         .Include(c => c.Speaker)
                         .FirstOrDefault(c => c.Id == id);
            return View(model);
        }

        [HttpDelete]
        [Route("Conference/{id}")]
        public ActionResult DeleteConference(int id)
        {
            Conference conference = db.Conferences.Find(id);
            if (conference == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound); // 404
            }

            db.Conferences.Remove(conference);
            db.SaveChanges();
        
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [HttpGet]
        [Route("Conference/Edit/{id}")]
        public ActionResult Edit(int id)
        {
            var model = db.Conferences
                         .Include(c => c.Speaker)
                         .FirstOrDefault(c => c.Id == id);
            return View(model);
        }

        [HttpPut]
        [Route("Conference/Edit")]
        public ActionResult Edit(Conference conference)
        {
            if (!ModelState.IsValid)
            {                
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            conference.SpeakerId = conference.Speaker.Id;

            db.Entry(conference).State = EntityState.Modified;            

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConferenceExists(conference.Id))
                {                    
                    return new HttpStatusCodeResult(HttpStatusCode.NotFound);
                }
                throw;
            }
            return new HttpStatusCodeResult(HttpStatusCode.NoContent);
        }

        [HttpGet]
        [Route("Conference/Create")]
        public ActionResult Create()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [HttpPost]
        [Route("Conference/Create")]
        public ActionResult Create(Conference conference)
        {
            if (!ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            conference.SpeakerId = conference.Speaker.Id;
            conference.Speaker = null;           

            db.Conferences.Add(conference);
            db.SaveChanges();

            return new HttpStatusCodeResult(HttpStatusCode.Created);
        }

        private bool ConferenceExists(int id)
        {
            return db.Conferences.Count(e => e.Id == id) > 0;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}