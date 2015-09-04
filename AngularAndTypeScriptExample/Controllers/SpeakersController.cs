using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using AngularAndTypeScriptExample.Models;

namespace AngularAndTypeScriptExample.Controllers
{
    public class SpeakersController : ApiController
    {
        private ConferenceContext db = new ConferenceContext();

        // GET: api/Speakers
        public IQueryable<Speaker> GetSpeakers()
        {
            return db.Speakers;
        }

        // GET: api/Speakers/5
        [ResponseType(typeof(Speaker))]
        public IHttpActionResult GetSpeaker(int id)
        {
            Speaker speaker = db.Speakers.Find(id);
            if (speaker == null)
            {
                return NotFound();
            }

            return Ok(speaker);
        }

        // PUT: api/Speakers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSpeaker(int id, Speaker speaker)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != speaker.Id)
            {
                return BadRequest();
            }

            db.Entry(speaker).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpeakerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Speakers
        [ResponseType(typeof(Speaker))]
        public IHttpActionResult PostSpeaker(Speaker speaker)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Speakers.Add(speaker);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = speaker.Id }, speaker);
        }

        // DELETE: api/Speakers/5
        [ResponseType(typeof(Speaker))]
        public IHttpActionResult DeleteSpeaker(int id)
        {
            Speaker speaker = db.Speakers.Find(id);
            if (speaker == null)
            {
                return NotFound();
            }

            db.Speakers.Remove(speaker);
            db.SaveChanges();

            return Ok(speaker);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SpeakerExists(int id)
        {
            return db.Speakers.Count(e => e.Id == id) > 0;
        }
    }
}