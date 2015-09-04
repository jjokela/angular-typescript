using System.Data.Entity;
using System.Data.Entity.Migrations;
using AngularAndTypeScriptExample.Models;

namespace AngularAndTypeScriptExample.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<ConferenceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ConferenceContext context)
        {
            //  This method will be called after migrating to the latest version.

            context.Database.ExecuteSqlCommand("DELETE FROM [Conferences]");
            context.Database.ExecuteSqlCommand("DELETE FROM [Speakers]");

            var speaker1 = new Speaker { Name = "Bob Smith" };
            var speaker2 = new Speaker { Name = "Jane Smith" };
            var speaker3 = new Speaker { Name = "John Doe" };
            var speaker4 = new Speaker { Name = "Jane Doe" };

            context.Speakers.AddOrUpdate(
                speaker1, 
                speaker2, 
                speaker3, 
                speaker4
            );

            context.Conferences.AddOrUpdate(
                new Conference { Name = "Constructing Erasure Coding and Thin Clients with SOUN", Description = "Recent advances in signed algorithms and reliable archetypes do not necessarily obviate the need for replication. In fact, few theorists would disagree with the study of replication. We consider how SMPs can be applied to the deployment of hash tables.", Speaker = speaker1},
                new Conference { Name = "Buzzwords 1.0", Description = "Learn the latest buzzwords", Speaker = speaker2 },
                new Conference { Name = "An Evaluation of Digital-to-Analog Converters Using Myope", Description = "The analysis of neural networks is a theoretical quandary. In fact, few leading analysts would disagree with the synthesis of multi-processors. Myope, our new heuristic for the construction of the location-identity split, is the solution to all of these issues.", Speaker = speaker3 },
                new Conference { Name = "On the Deployment of Information Retrieval Systems", Description = "Probabilistic information and linked lists have garnered limited interest from both researchers and physicists in the last several years. In fact, few cyberinformaticians would disagree with the construction of 802.11 mesh networks, which embodies the private principles of steganography. In this work we discover how sensor networks can be applied to the improvement of reinforcement learning.", Speaker = speaker4 }
            );
        }
    }
}
