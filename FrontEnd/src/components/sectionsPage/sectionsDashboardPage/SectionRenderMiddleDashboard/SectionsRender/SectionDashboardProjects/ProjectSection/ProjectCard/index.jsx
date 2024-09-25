import { useContext, useState } from 'react';
import {
	EditProjectModal,
	ImageProjectModal,
	ImageUpdateProjectModal,
} from '../../../../../../../fragments';

import {
	AppBehaviorContext,
	UserAdmContext,
} from '../../../../../../../../providers';
import { InsertImage } from './InsertImage';
import { ProjectButtons } from './ProjectButtons';

import {
	useLimitedDescription,
	useImageObject,
} from '../../../../../../../../hooks';

import styles from './styles.module.scss';

export const ProjectCard = ({ project }) => {
	const { setImageProject } = useContext(AppBehaviorContext);

	const { setEditProjects, projectDelete, setProject } =
		useContext(UserAdmContext);

	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const [isOpenInsertImage, setIsOpenInsertImage] = useState(false);
	const [isOpenUpdateImage, setIsopenUpdateImage] = useState(false);

	const maxLength = 120;
	const LimitedDescription = useLimitedDescription(
		project.description,
		maxLength,
	);

	const projectImage = useImageObject(project);

	return (
		<>
			<li>
				<div className={`${styles.cardContainer}`}>
					<div className={`${styles.header}`}>
						<img src={projectImage} alt={`${project.title}`} />
					</div>
					<div className={`${styles.middle}`}>
						<div className={`${styles.presentationContainer}`}>
							<h3>{project.title}</h3>
							<p>{LimitedDescription}</p>
						</div>
						<div className={styles.buttonsContainer}>
							<ProjectButtons
								project={project}
								setIsOpen={setIsOpen}
								setEditProjects={setEditProjects}
								projectDelete={projectDelete}
								setLoading={setLoading}
								loading={loading}
							/>
							<InsertImage
								project={project}
								setIsOpenInsertImage={setIsOpenInsertImage}
								setIsopenUpdateImage={setIsopenUpdateImage}
								setProject={setProject}
								projectImage={projectImage}
								setImageProject={setImageProject}
							/>
						</div>
					</div>
				</div>
			</li>

			{isOpen === true ? <EditProjectModal setIsOpen={setIsOpen} /> : null}
			{isOpenInsertImage === true ? (
				<ImageProjectModal
					setIsOpenInsertImage={setIsOpenInsertImage}
					project={project}
				/>
			) : null}

			{isOpenUpdateImage === true ? (
				<ImageUpdateProjectModal
					setIsopenUpdateImage={setIsopenUpdateImage}
					project={project}
				/>
			) : null}
		</>
	);
};
