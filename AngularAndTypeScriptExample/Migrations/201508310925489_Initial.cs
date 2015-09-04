using System.Data.Entity.Migrations;

namespace AngularAndTypeScriptExample.Migrations
{
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Conferences",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        Speaker_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Speakers", t => t.Speaker_Id, cascadeDelete: true)
                .Index(t => t.Speaker_Id);
            
            CreateTable(
                "dbo.Speakers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Conferences", "Speaker_Id", "dbo.Speakers");
            DropIndex("dbo.Conferences", new[] { "Speaker_Id" });
            DropTable("dbo.Speakers");
            DropTable("dbo.Conferences");
        }
    }
}
