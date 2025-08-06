import express from 'express';
import { addSchool, listSchools } from '../src/controllers/schoolsController.js';
const router = express.Router();

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);

export default router;
