"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var artistSchema = new mongoose.Schema({
    dateCreated: {
        type: Date,
        required: true
    },
    pricing: {
        type: String,
        required: false
    },
    exp: {
        type: String,
        required: false
    },
    busType: {
        type: String,
        required: false
    },
    busName: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        default: 'https://d30y9cdsu7xlg0.cloudfront.net/png/175172-200.png',
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    allowContact: {
        type: Boolean,
        default: false,
        required: false
    },
    address: {
        type: Object,
        required: false
    },
    styles: {
        type: [String],
        required: false
    },
    portfolio: {
        type: [String],
        required: false
    }
});
exports.default = mongoose.model('artist', artistSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9hcnRpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBcUM7QUFxQnJDLElBQUksWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLDBEQUEwRDtRQUNuRSxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2QsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDZCxRQUFRLEVBQUUsS0FBSztLQUNoQjtDQUNGLENBQUMsQ0FBQztBQUVILGtCQUFlLFFBQVEsQ0FBQyxLQUFLLENBQVMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcnRpc3QgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XHJcbiAgZGF0ZUNyZWF0ZWQ6IERhdGU7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHByb2ZpbGVQaWM6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgYnVzTmFtZTogc3RyaW5nO1xyXG4gIGJ1c1R5cGU6IHN0cmluZztcclxuICBleHA6IHN0cmluZztcclxuICBwcmljaW5nOiBzdHJpbmc7XHJcbiAgYmlvOiBzdHJpbmc7XHJcbiAgYWxsb3dDb250YWN0OiBib29sZWFuO1xyXG4gIGFkZHJlc3M6IG9iamVjdDtcclxuICBzdHlsZXM6IHN0cmluZ1tdO1xyXG4gIHBvcnRmb2xpbzogc3RyaW5nW107XHJcbn1cclxuXHJcbmxldCBhcnRpc3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBkYXRlQ3JlYXRlZDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBwcmljaW5nOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxuICB9LFxyXG4gIGV4cDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgfSxcclxuICBidXNUeXBlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxuICB9LFxyXG4gIGJ1c05hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gIH0sXHJcbiAgZmlyc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgbGFzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgfSxcclxuICBwcm9maWxlUGljOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnaHR0cHM6Ly9kMzB5OWNkc3U3eGxnMC5jbG91ZGZyb250Lm5ldC9wbmcvMTc1MTcyLTIwMC5wbmcnLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgYmlvOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxuICB9LFxyXG4gIGFsbG93Q29udGFjdDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgfSxcclxuICBhZGRyZXNzOiB7XHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxuICB9LFxyXG4gIHN0eWxlczoge1xyXG4gICAgdHlwZTogW1N0cmluZ10sXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxuICB9LFxyXG4gIHBvcnRmb2xpbzoge1xyXG4gICAgdHlwZTogW1N0cmluZ10sXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWw8QXJ0aXN0PignYXJ0aXN0JywgYXJ0aXN0U2NoZW1hKTtcclxuIl19