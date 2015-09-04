namespace AngularAndTypeScriptExample.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ForeignKey : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Conferences", name: "Speaker_Id", newName: "SpeakerId");
            RenameIndex(table: "dbo.Conferences", name: "IX_Speaker_Id", newName: "IX_SpeakerId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Conferences", name: "IX_SpeakerId", newName: "IX_Speaker_Id");
            RenameColumn(table: "dbo.Conferences", name: "SpeakerId", newName: "Speaker_Id");
        }
    }
}
