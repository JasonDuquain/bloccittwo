
const topicQueries = require('../db/queries.topics.js');



module.exports = {
    
    index(req, res, next) {
        topicQueries.getAllTopics((err, topics) => {
            (err) ? res.redirect(500, 'static/index', { title: 'Welcome to  Bloccit' }) : res.render('topics/index', { 
                topics: topics 
            }); 
        });
    },
    new(req, res, next) {
        res.render('topics/new')
    },
    create(req, res, next) {
        let newTopic = {
            title: req.body.title,
            description: req.body.description
        };
        topicQueries.addTopic(newTopic, (err, topic) => {
            (err) ? res.redirect(500, '/topics/new') : res.redirect(303, `/topics/${topic.id}`)
        });
    },
    show(req, res, next) {
        topicQueries.getTopic(req.params.id, (err, topic) => {
            (err || topic === null) ? res.redirect(404, '/') : res.render('topics/show', {
                topic: topic
            });
        });
    },
    destroy(req, res, next) {
        topicQueries.deleteTopic(req.params.id, (err, topic) => {
            (err) ? res.redirect(500, `/topics/${topic.id}`) : res.redirect(303, '/topics')
        });
    },
    edit(req, res, next) {
        topicQueries.getTopic(req.params.id, (err, topic) => {
            (err || topic === null) ? res.redirect(404, '/') : res.render('topics/edit', {
                topic: topic
            });
        });
    },
    update(req, res, next) {
        topicQueries.updateTopic(req.params.id, req.body, (err, topic) => {
            (err || topic === null) ? res.redirect(404, `/topics/${req.params.id}/edit`) : res.redirect(`/topics/${topic.id}`);
        });
    }
    
};



