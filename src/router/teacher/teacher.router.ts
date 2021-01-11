import {Router} from 'express';

import {teacherController} from '../../controller'

const router = Router();

router.post('/create', teacherController.addNewTeacher);
router.get('/find/:id', teacherController.findTeacher);
router.delete('/delete/:id', teacherController.deleteTeacher);
router.put('/update', teacherController.updateTeacher);
router.post('/filter', teacherController.getTargetMathTeachers);

export const teacherRouter = router;