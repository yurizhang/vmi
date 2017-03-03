/**
* Just define settings or constant constiable here
* No dependency
*/
export const TMMS_WEB_ROOT = '/api/v1/'; 
export const TMMS_SESSION_KEY = 'username';
export const TMMS_MAX_PAGE_LIMIT = 999999;
export const VMI_LANGUAGE_POLICY_ID = 40;
export const VMI_WALLPAPER_POLICY_ID = 50;
export const VMI_MAGIC_CODE = '#$vmi4trend';

// show navagation item
// 
 const navigation = {
	children:	[
		{
			id:	 		1,
			title:		"Dashboard",
			url:		"#/dashboard",
			status:		"show",
			children:	[]
		},
		{
			id:			2,
			title:		"Users",
			url:		"#/report",
			status:		"show",
			children:	[]
		},
		{
			id:			3,
			title:		"Profiles",
			url:		"#/about",
			status:		"show",
			children:	[]
		},
		{
			id:			4,
			title:		"Applications",
			url:		null,
			status:		"show",
			children:	[
			    { id:	41,
					title:		"Applications",
					url:		"../apps/index.htm",
					status:		"show",
					children:	[]
				},   
				{
					id:			42,
					title:		"Local Applications",
					url:		"../apps/local_app.htm",
					status:		"show",
					children:	[]
				},
				{
					id:			43,
					title:		"Wallpaper Management",
					url:		"../profiles/wallpaper.htm",
					status:		"show",
					children:	[]
				}
			]
		},
		{
			id:			5,
			title:		"Servers",
			url:		"../servers/index.htm",
			status:		"show",
			children:	[]
		},
		{
			id:			7,
			title:		"Reports",
			url:		null,
			status:		"show",
			children:	[
                {
                    id:         71,
					title:		"Reports",
					url:		"../reports/index.htm",
                    status:     "show",
                    children:   []
                },
                {
                    id:         72,
					title:		"Logs",
					url:		"../reports/log.htm",
                    status:     "show",
                    children:   []
                }
			]
		},
		{
			id:			6,
			title:		"Administration",
			url:		null,
			status:		"show",
			children:	[
                {
                    id:         61,
                    title:      "My Account",
                    url:        "../administration/admin_profile.htm",
                    status:     "show",
                    children:   []
                },
				{
					id:			62,
					title:		"Email Notifications",
					url:		"../administration/email.htm",
					status:		"show",
					children:	[]
				},
                {
                    id:         63,
                    title:      "System Settings",
                    url:        "../administration/systemsettings.htm",
                    status:     "show",
                    children:   []
                },
				{
					id:			68,
					title:		"Certificate Management",
					url:		"../administration/cert.htm",
					status:		"show",
					children:	[]
				},
				{
					id:			65,
					title:		"Access Management",
					url:		"../administration/access.htm",
					status:		"hide",
					children:	[]
				},
                {
                    id:         66,
                    title:      "Product License",
                    url:        "../administration/license.htm",
                    status:     "show",
                    children:   []
                },
                {
                    id:         67,
                    title:      "About",
                    url:        "../administration/about.htm",
                    status:     "show",
                    children:   []
                }
			]
		},
		{
			id:			8,
			title:		"Help",
			url:		"../help/index.html",
			status:		"show",
			linktarget: "_blank",
			children:	[]
		}

	]
};


export default navigation;