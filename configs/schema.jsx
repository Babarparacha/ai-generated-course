 

import {pgTable,varchar,serial,json,boolean,integer} from "drizzle-orm/pg-core";

export const CourseList = pgTable("courseList", {
  id: serial('id').primaryKey(),
  courseId: varchar('courseId').notNull(),
  name: varchar('name').notNull(),
  category: varchar('category').notNull(),
  level: varchar('level').notNull(),
  includeVideo: varchar('includeVideo').notNull().default('Yes'),
  courseOutput: json('courseOutput').notNull(),
  createdBy: varchar('createdBy').notNull(),
  userName: varchar('userName'),
  userProfileImage: varchar('userProfileImage'),
  courseBanner:varchar("courseBanner").default("/qa.png"),
  publish:boolean('publish').default(false)
});

export const Chapters=pgTable("chapter", {
  id: serial('id').primaryKey(),
  courseId: varchar('courseId').notNull(),
  chapterId: varchar('chapterId').notNull(),
  content: json('content').notNull(),
  videoId:varchar("videoId").notNull()
});

