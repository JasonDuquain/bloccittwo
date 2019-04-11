'use strict';
module.exports = (sequelize, DataTypes) => {
    
  var Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
      topicId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
  }, {});
  
    //We associate the Post model with the Topic model using a one-to-many association. Specifically, we say that a Post object belongs to a Topic object. We pass an options object specifying configuration options including the foreign key to use and what to do when we delete the parent of a post object. Sequelize creates methods based on the association we describe. In this case, it creates Post model instance methods like setTopic and getTopic which allow us to set and get the topic associated with a post instance. 
  Post.associate = function(models) {
      
    // associations can be defined here
      Post.belongsTo(models.Topic, { //models is plural!!
          foreignKey: "topicId",
          onDelete: "CASCADE"
      });
      
      Post.belongsTo(models.User, {
          foreignKey: "userId",
          onDelete: "CASCADE"
      });
      
  };
  return Post;
    
};