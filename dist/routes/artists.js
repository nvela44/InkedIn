"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var artist_1 = require("../models/artist");
var router = express.Router();
router.get('/', function (req, res) {
    artist_1.default.find().then(function (foundArtists) {
        res.json(foundArtists);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/:id', function (req, res) {
    artist_1.default.findOne({ _id: req.params.id }).then(function (foundArtist) {
        res.json(foundArtist);
    }).catch(function (err) {
        res.json(err);
    });
});
router.post('/', function (req, res) {
    var newArtist = new artist_1.default();
    newArtist.dateCreated = new Date();
    newArtist.firstName = req.body.firstName;
    newArtist.lastName = req.body.lastName;
    newArtist.email = req.body.email;
    newArtist.username = req.body.username;
    newArtist.password = req.body.password;
    newArtist.busName = req.body.busName;
    newArtist.busType = req.body.busType;
    newArtist.exp = req.body.exp;
    newArtist.pricing = req.body.pricing;
    newArtist.bio = req.body.bio;
    newArtist.allowContact = false;
    newArtist.address = {};
    newArtist.styles = [];
    newArtist.portfolio = [];
    newArtist.save().then(function (createdArtist) {
        res.json(createdArtist);
    }).catch(function (err) {
        res.json(err);
    });
});
router.put('/:id', function (req, res) {
    artist_1.default.findOne({ _id: req.params.id }).then(function (foundArtist) {
        foundArtist.dateCreated = req.body.dateCreated;
        foundArtist.firstName = req.body.firstName;
        foundArtist.lastName = req.body.lastName;
        foundArtist.email = req.body.email;
        foundArtist.username = req.body.username;
        foundArtist.password = req.body.password;
        foundArtist.busName = req.body.busName;
        foundArtist.busType = req.body.busType;
        foundArtist.exp = req.body.exp;
        foundArtist.pricing = req.body.pricing;
        foundArtist.bio = req.body.bio;
        foundArtist.allowContact = req.body.allowContact;
        foundArtist.address = req.body.address;
        foundArtist.styles = req.body.styles;
        foundArtist.portfolio = req.body.portfolio;
        foundArtist.save().then(function (updatedArtist) {
            res.json(updatedArtist);
        }).catch(function (err) {
            res.json(err);
        });
    }).catch(function (err) {
        res.json(err);
    });
});
router.delete('/:id', function (req, res) {
    artist_1.default.remove({ _id: req.params.id }).then(function (deletedArtist) {
        res.json(deletedArtist);
    }).catch(function (err) {
        res.json(err);
    });
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXJ0aXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQUNuQywyQ0FBc0M7QUFFdEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdkIsZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxZQUFZO1FBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztRQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDMUIsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7UUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1FBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN4QixJQUFJLFNBQVMsR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztJQUU3QixTQUFTLENBQUMsV0FBVyxHQUFH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QUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFhO1lBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7UUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzdCLGdCQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFhO1FBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztRQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vbW9kZWxzL2FydGlzdCc7XHJcblxyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICBBcnRpc3QuZmluZCgpLnRoZW4oKGZvdW5kQXJ0aXN0cykgPT4ge1xyXG4gICAgcmVzLmpzb24oZm91bmRBcnRpc3RzKTtcclxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICByZXMuanNvbihlcnIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLCAocmVxLCByZXMpID0+IHtcclxuICBBcnRpc3QuZmluZE9uZSh7IF9pZDogcmVxLnBhcmFtcy5pZCB9KS50aGVuKChmb3VuZEFydGlzdCkgPT4ge1xyXG4gICAgcmVzLmpzb24oZm91bmRBcnRpc3QpO1xyXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgIHJlcy5qc29uKGVycik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICBsZXQgbmV3QXJ0aXN0ID0gbmV3IEFydGlzdCgpO1xyXG5cclxuICBuZXdBcnRpc3QuZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xyXG4gIG5ld0FydGlzdC5maXJzdE5hbWUgPSByZXEuYm9keS5maXJzdE5hbWU7XHJcbiAgbmV3QXJ0aXN0Lmxhc3ROYW1lID0gcmVxLmJvZHkubGFzdE5hbWU7XHJcbiAgbmV3QXJ0aXN0LmVtYWlsID0gcmVxLmJvZHkuZW1haWw7XHJcbiAgbmV3QXJ0aXN0LnVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XHJcbiAgbmV3QXJ0aXN0LnBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XHJcbiAgbmV3QXJ0aXN0LmJ1c05hbWUgPSByZXEuYm9keS5idXNOYW1lO1xyXG4gIG5ld0FydGlzdC5idXNUeXBlID0gcmVxLmJvZHkuYnVzVHlwZTtcclxuICBuZXdBcnRpc3QuZXhwID0gcmVxLmJvZHkuZXhwO1xyXG4gIG5ld0FydGlzdC5wcmljaW5nID0gcmVxLmJvZHkucHJpY2luZztcclxuICBuZXdBcnRpc3QuYmlvID0gcmVxLmJvZHkuYmlvO1xyXG4gIG5ld0FydGlzdC5hbGxvd0NvbnRhY3QgPSBmYWxzZTtcclxuICBuZXdBcnRpc3QuYWRkcmVzcyA9IHt9O1xyXG4gIG5ld0FydGlzdC5zdHlsZXMgPSBbXTtcclxuICBuZXdBcnRpc3QucG9ydGZvbGlvID0gW107XHJcblxyXG4gIG5ld0FydGlzdC5zYXZlKCkudGhlbigoY3JlYXRlZEFydGlzdCkgPT4ge1xyXG4gICAgcmVzLmpzb24oY3JlYXRlZEFydGlzdCk7XHJcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgcmVzLmpzb24oZXJyKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5yb3V0ZXIucHV0KCcvOmlkJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgQXJ0aXN0LmZpbmRPbmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSkudGhlbigoZm91bmRBcnRpc3QpID0+IHtcclxuICAgIGZvdW5kQXJ0aXN0LmRhdGVDcmVhdGVkID0gcmVxLmJvZHkuZGF0ZUNyZWF0ZWQ7XHJcbiAgICBmb3VuZEFydGlzdC5maXJzdE5hbWUgPSByZXEuYm9keS5maXJzdE5hbWU7XHJcbiAgICBmb3VuZEFydGlzdC5sYXN0TmFtZSA9IHJlcS5ib2R5Lmxhc3ROYW1lO1xyXG4gICAgZm91bmRBcnRpc3QuZW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuICAgIGZvdW5kQXJ0aXN0LnVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XHJcbiAgICBmb3VuZEFydGlzdC5wYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xyXG4gICAgZm91bmRBcnRpc3QuYnVzTmFtZSA9IHJlcS5ib2R5LmJ1c05hbWU7XHJcbiAgICBmb3VuZEFydGlzdC5idXNUeXBlID0gcmVxLmJvZHkuYnVzVHlwZTtcclxuICAgIGZvdW5kQXJ0aXN0LmV4cCA9IHJlcS5ib2R5LmV4cDtcclxuICAgIGZvdW5kQXJ0aXN0LnByaWNpbmcgPSByZXEuYm9keS5wcmljaW5nO1xyXG4gICAgZm91bmRBcnRpc3QuYmlvID0gcmVxLmJvZHkuYmlvO1xyXG4gICAgZm91bmRBcnRpc3QuYWxsb3dDb250YWN0ID0gcmVxLmJvZHkuYWxsb3dDb250YWN0O1xyXG4gICAgZm91bmRBcnRpc3QuYWRkcmVzcyA9IHJlcS5ib2R5LmFkZHJlc3M7XHJcbiAgICBmb3VuZEFydGlzdC5zdHlsZXMgPSByZXEuYm9keS5zdHlsZXM7XHJcbiAgICBmb3VuZEFydGlzdC5wb3J0Zm9saW8gPSByZXEuYm9keS5wb3J0Zm9saW87XHJcblxyXG4gICAgZm91bmRBcnRpc3Quc2F2ZSgpLnRoZW4oKHVwZGF0ZWRBcnRpc3QpID0+IHtcclxuICAgICAgcmVzLmpzb24odXBkYXRlZEFydGlzdCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHJlcy5qc29uKGVycilcclxuICAgIH0pO1xyXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgIHJlcy5qc29uKGVycik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxucm91dGVyLmRlbGV0ZSgnLzppZCcsIChyZXEsIHJlcykgPT4ge1xyXG4gIEFydGlzdC5yZW1vdmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSkudGhlbigoZGVsZXRlZEFydGlzdCkgPT4ge1xyXG4gICAgcmVzLmpzb24oZGVsZXRlZEFydGlzdCk7XHJcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgcmVzLmpzb24oZXJyKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdfQ==