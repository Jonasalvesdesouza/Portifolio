import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from '../services';
import { NotifyError, NotifySucess } from '../components/fragments';

export const UserAdmContext = createContext({});

export const UserAdmProvider = ({ children }) => {
  const localToken = localStorage.getItem('@KEYADM');
  const [token, setToken] = useState(localToken ? localToken : '');
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const idAdm = localStorage.getItem('@IDADM');

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState([]);

  const [editProfile, setEditProfile] = useState([]);
  const [editContactProfile, setEditContactProfile] = useState([]);
  const [editProjects, setEditProjects] = useState([]);
  const [editArticles, setEditArticles] = useState([]);
  const [editSocialMedia, setEditSocialMedia] = useState([]);
  const [editHobby, setEditHobby] = useState([]);
  const [editSkill, setEditSkill] = useState([]);
  const [editEducation, setEditEducation] = useState([]);
  const [editJobExperience, setEditJobExperience] = useState([]);

  const [viewMessage, setViewMessage] = useState([]);

  const [socialMediaList, setSocialMediaList] = useState([]);
  const [hobbyList, setHobbyList] = useState([]);
  const [skillList, setSkillList] = useState([]);
  const [jobExperienceList, setJobExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [messageList, setMessageList] = useState([]);

  const [project, setProject] = useState({});
  const [article, setArticle] = useState({});
  const [jobExperience, setJobExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const navigate = useNavigate();
  const { state } = useLocation();
  const pathName = window.location.pathname;

  const { data } = useQuery({
    queryKey: ['adm'],
    queryFn: async () => {
      const { data } = await api.get(`/user/${idAdm}`, { ...headers });
      setUser(data);
      navigate(pathName);
      return data;
    },
  });

  const { Profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await api.get('/profile/');
      setProfile(data);
      setSocialMediaList(data.socialMedia);
      setHobbyList(data.hobby);
      setSkillList(data.skill);
      setJobExperienceList(data.jobExperience);
      setEducationList(data.education);
      setProjectsList(data.projects);
      setArticlesList(data.articles);
      setMessageList(data.message);
      return data;
    },
  });

  const profileUpdate = async (payload, setLoading, reset) => {
    try {
      setLoading(true);

      const { data } = await api.patch('/profile/update/', payload, headers);

      NotifySucess('User update successfully!');
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong! ');
    } finally {
      setLoading(false);
    }
  };

  const profileImageRegister = async (payload, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post(`/profile/image`, payload, headers);

      setProfile({
        ...profile,
        image: data,
      });

      NotifySucess('Image registered successfully');
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const profileImageUpdate = async (payload, setLoading, reset) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/profile/image/update/${profile.image.id}`,
        payload,
        headers,
      );

      setProfile({
        ...profile,
        image: data,
      });

      NotifySucess('Image edited successfully');
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const contactUpdate = async (payload, setLoading, reset) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        '/profile/contact/update/',
        payload,
        headers,
      );

      NotifySucess('User update successfully!');
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong! ');
    } finally {
      setLoading(false);
    }
  };

  const projectsRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post(`/projects/`, payload, headers);

      setProjectsList([...projectsList, data]);

      NotifySucess('Project registered successfully');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const projectImageRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenInsertImage,
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post(
        `/projects/image/${project.id}`,
        payload,
        headers,
      );

      setProjectsList(
        projectsList.map((project) => {
          if (project.id === data.projectId) {
            return { ...project, image: data };
          } else {
            return project;
          }
        }),
      );

      NotifySucess('Project registered successfully');
      reset();
      setIsOpenInsertImage(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const projectImageUpdate = async (
    payload,
    setLoading,
    reset,
    setIsopenUpdateImage,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/projects/image/update/${project.image.id}`,
        payload,
        headers,
      );

      setProjectsList(
        projectsList.map((project) => {
          if (project.id === data.projectId) {
            return { ...project, image: data };
          } else {
            return project;
          }
        }),
      );

      NotifySucess('Project edited successfully');
      setIsopenUpdateImage(false);
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const projectUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/projects/update/${editProjects.id}`,
        payload,
        headers,
      );

      const newProjectsList = projectsList.map((project) => {
        if (project.id === editProjects.id) {
          return data;
        } else {
          return project;
        }
      });

      setProjectsList(newProjectsList);
      NotifySucess('Project edited successfully');
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const projectDelete = async (projectId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/projects/${projectId}`, headers);
      const newProjectsList = projectsList.filter(
        (project) => project.id !== projectId,
      );
      setProjectsList(newProjectsList);
      NotifySucess('Project deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const articleRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post(`/articles/`, payload, headers);

      setArticlesList([...articlesList, data]);

      NotifySucess('Article registered successfully');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const articleImageRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenInsertImage,
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post(
        `/articles/image/${article.id}`,
        payload,
        headers,
      );

      setArticlesList(
        articlesList.map((article) => {
          if (article.id === data.articleId) {
            const newArticle = { ...article, image: data };
            return newArticle;
          } else {
            return article;
          }
        }),
      );

      NotifySucess('Image registered successfully');
      reset();
      setIsOpenInsertImage(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const articleImageUpdate = async (
    payLoad,
    setLoading,
    reset,
    setIsopenUpdateImage,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/articles/image/update/${article.image.id}`,
        payLoad,
        headers,
      );

      setArticlesList(
        articlesList.map((article) => {
          if (article.id === data.articleId) {
            return { ...article, image: data };
          } else {
            return article;
          }
        }),
      );

      NotifySucess('Article edited successfully');
      setIsopenUpdateImage(false);
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const articleUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/articles/update/${editArticles.id}`,
        payload,
        headers,
      );

      const newArticlesList = articlesList.map((article) => {
        if (article.id === editArticles.id) {
          return data;
        } else {
          return article;
        }
      });

      setArticlesList(newArticlesList);
      NotifySucess('Article edited successfully');
      setIsOpen(false);
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const articleDelete = async (articleId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/articles/${articleId}`, headers);
      const newArdicleList = articlesList.filter(
        (artcile) => artcile.id !== articleId,
      );
      setArticlesList(newArdicleList);
      NotifySucess('Arcile deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const socialMediaRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.post('/socialmedia/', payload, headers);

      setSocialMediaList([...socialMediaList, data]);
      NotifySucess('Social Media Register successfully!');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const socialMediaUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/socialmedia/update/${editSocialMedia.id}`,
        payload,
        headers,
      );

      const newHobbyList = socialMediaList.map((socialMedia) => {
        if (socialMedia.id === editSocialMedia.id) {
          return data;
        } else {
          return socialMedia;
        }
      });

      setSocialMediaList(newHobbyList);
      NotifySucess('Project edited successfully');
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const socialMediaDelete = async (socialMediaId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/socialmedia/${socialMediaId}`, headers);
      const newSocialMediaList = socialMediaList.filter(
        (socialMedia) => socialMedia.id !== socialMediaId,
      );
      setSocialMediaList(newSocialMediaList);
      NotifySucess('Social Media deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const hobbyRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.post('/hobby/', payload, headers);

      setHobbyList([...hobbyList, data]);
      NotifySucess('User update successfully!');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
    }
  };

  const hobbyUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/hobby/update/${editHobby.id}`,
        payload,
        headers,
      );

      const newHobbyList = hobbyList.map((hobby) => {
        if (hobby.id === editHobby.id) {
          return data;
        } else {
          return hobby;
        }
      });

      setHobbyList(newHobbyList);
      NotifySucess('Project edited successfully');
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const hobbyDelete = async (hobbyId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/hobby/${hobbyId}`, headers);
      const newHobbyList = hobbyList.filter((hobby) => hobby.id !== hobbyId);
      setHobbyList(newHobbyList);
      NotifySucess('Hobby deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const skillRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.post('/skill/', payload, headers);

      setSkillList([...skillList, data]);
      NotifySucess('Skill update successfully!');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
    }
  };

  const skillUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/skill/update/${editSkill.id}`,
        payload,
        headers,
      );

      const newSkillList = skillList.map((skill) => {
        if (skill.id === editSkill.id) {
          return data;
        } else {
          return skill;
        }
      });

      setSkillList(newSkillList);
      NotifySucess('Skill edited successfully');
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const skillDelete = async (skillId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/skill/${skillId}`, headers);
      const newSkillList = skillList.filter((skill) => skill.id !== skillId);
      setSkillList(newSkillList);
      NotifySucess('Skill deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const educationRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.post('/education/', payload, headers);

      setEducationList([...educationList, data]);
      NotifySucess('Education Register successfully!');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const educationUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/education/update/${editEducation.id}`,
        payload,
        headers,
      );

      const newEducationList = educationList.map((education) => {
        if (education.id === editEducation.id) {
          return data;
        } else {
          return education;
        }
      });

      setEducationList(newEducationList);
      NotifySucess('Education edited successfully');
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    }
  };

  const educationDelete = async (educationId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/education/${educationId}`, headers);
      const newEducationList = educationList.filter(
        (education) => education.id !== educationId,
      );

      setEducationList(newEducationList);
      NotifySucess('Education deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const jobExperienceRegister = async (
    payload,
    setLoading,
    reset,
    setIsOpenDashboard,
  ) => {
    try {
      setLoading(true);

      const { data } = await api.post('/jobExperience/', payload, headers);

      setJobExperienceList([...jobExperienceList, data]);
      NotifySucess('Job Experience Register successfully!');
      reset();
      setIsOpenDashboard(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const jobExperienceUpdate = async (payload, setLoading, reset, setIsOpen) => {
    try {
      setLoading(true);

      const { data } = await api.patch(
        `/jobexperience/update/${editJobExperience.id}`,
        payload,
        headers,
      );

      const newJobExperienceList = jobExperienceList.map((jobExperience) => {
        if (jobExperience.id === editJobExperience.id) {
          return data;
        } else {
          return jobExperience;
        }
      });

      setJobExperienceList(newJobExperienceList);
      NotifySucess('Education edited successfully');
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    }
  };

  const jobExperienceDelete = async (jobExperienceId, setLoading) => {
    try {
      setLoading(true);

      await api.delete(`/jobexperience/${jobExperienceId}`, headers);
      const newJobExperienceList = jobExperienceList.filter(
        (jobExperience) => jobExperience.id !== jobExperienceId,
      );

      setJobExperienceList(newJobExperienceList);
      NotifySucess('Job Experience deleted successfully');
    } catch (error) {
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const messageMeRegister = async (payLoad, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post(`/message/${profile.id}`, payLoad);
      setMessageList([...messageList, data]);

      NotifySucess('Message sent successfully');
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Unfortunately something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const messageMeDelete = async (messageId, setLoading) => {
    console.log(messageId);
    try {
      await api.delete(`/message/${messageId}`, headers);
      const newMessageList = messageList.filter(
        (message) => message.id !== messageId,
      );
      setMessageList(newMessageList);
      NotifySucess('Message delete successfully');
    } catch (error) {
      console.log(NotifyError('Unfortunately something went wrong'));
    } finally {
      setLoading(false);
    }
  };

  const userAdmLogin = async (payLoad, setLoading, reset) => {
    try {
      setLoading(true);

      const { data } = await api.post('/user/login', payLoad);
      localStorage.setItem('@KEYADM', data?.accessToken);
      localStorage.setItem('@IDADM', data?.user.id);
      setToken(data?.accessToken);
      setUser(data?.user);

      NotifySucess('Login Successfull!');
      navigate(state?.lastRoute ? state.lastRoute : '/dashboard');
      reset();
    } catch (error) {
      console.log(error);
      NotifyError('Invalid Wsername or Password');
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@KEYADM');
    localStorage.removeItem('@IDADM');
    NotifyError('Logout successful!');
    navigate('/login');
  };

  return (
    <UserAdmContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        editProfile,
        setEditProfile,
        editContactProfile,
        setEditContactProfile,
        editProjects,
        setEditProjects,
        editArticles,
        setEditArticles,
        editSocialMedia,
        setEditSocialMedia,
        editHobby,
        setEditHobby,
        editSkill,
        setEditSkill,
        editEducation,
        setEditEducation,
        editJobExperience,
        setEditJobExperience,
        viewMessage,
        setViewMessage,
        socialMediaList,
        setSocialMediaList,
        hobbyList,
        setHobbyList,
        skillList,
        setSkillList,
        jobExperienceList,
        setJobExperienceList,
        educationList,
        setEducationList,
        projectsList,
        setProjectsList,
        articlesList,
        setArticlesList,
        messageList,
        setMessageList,
        project,
        setProject,
        article,
        setArticle,
        jobExperience,
        setJobExperience,
        education,
        setEducation,
        profileUpdate,
        profileImageRegister,
        profileImageUpdate,
        contactUpdate,
        socialMediaRegister,
        socialMediaUpdate,
        socialMediaDelete,
        hobbyRegister,
        hobbyUpdate,
        projectsRegister,
        projectImageRegister,
        projectImageUpdate,
        projectUpdate,
        articleImageRegister,
        articleUpdate,
        articleImageUpdate,
        projectDelete,
        articleRegister,
        articleDelete,
        hobbyDelete,
        skillRegister,
        skillUpdate,
        skillDelete,
        educationRegister,
        educationUpdate,
        educationDelete,
        jobExperienceRegister,
        jobExperienceUpdate,
        jobExperienceDelete,
        messageMeRegister,
        messageMeDelete,
        userAdmLogin,
        userLogout,
      }}
    >
      {children}
    </UserAdmContext.Provider>
  );
};
