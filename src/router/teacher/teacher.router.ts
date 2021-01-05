import {Router} from 'express';

import {teacherController} from '../../controller'

const router = Router();

router.post('/create', teacherController.addNewTeacher);

export const techerRouter = router;