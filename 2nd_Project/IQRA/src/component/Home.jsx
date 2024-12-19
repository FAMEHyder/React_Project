import { Grid, Box, Typography } from "@mui/material";
import logo from "../image/navbarLogo.png";
import bg from "../image/photo.png";

const Home = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "80%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            height: "80%",
            backgroundImage: `url(${bg})`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: -2,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "80%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          },
        }}
      >
        {/* Logo Image */}
        <Box
          sx={{
            width: { xs: "150px", sm: "200px", md: "220px" },
            height: { xs: "150px", sm: "200px", md: "220px" },
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: { xs: '230px', sm: '290px', md: '250px', lg: '330px', xl: '430px' },
            backgroundPosition: "center",
            borderRadius: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            border: "5px solid white",
            position: "relative",
            mt: { xs: 2, sm: 4 },
          }}
        />
        <Typography
          sx={{
            mt: { xs: 2, sm: 3 },
            px: 2,
            fontFamily: "Cambria",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            fontSize: { xs: "18px", sm: "24px", md: "30px" },
          }}
        >
          IQRA YOUTH EDUCATIONAL FOUNDATION
        </Typography>

        {/* Three Boxes */}
        <Grid
          container
          spacing={2}
          sx={{
            mt: 4,
            px: 2,
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Our Mission:",
              content:
                "Our mission is to nurture a generation of morally upright, educated, and capable individuals who contribute positively to society. We aim to achieve this by promoting ethical and spiritual values through the teachings of the Quran and the lives of the Holy Prophet (PBUH) and Ahlul Bayt. We support underprivileged and talented students by providing education, scholarships, and access to top institutions. Additionally, we raise awareness of moral values through workshops, seminars, and recreational activities.",
              bgColor: "linear-gradient(to bottom, rgb(243, 74, 7), rgb(243, 74, 7))",
            },
            {
              title: "Constitution:",
              content:
                "1. The organization will have no affiliation with any political party.\n2. Amendments to the constitution can only be made with the approval of the supervisory body and a two-thirds majority.\n3. No one other than the cabinet will have the right to interfere in the administrative affairs of the organization.\n4. All members will prioritize collective interests over personal benefits.",
              bgColor: "linear-gradient(to bottom, rgb(5, 94, 136), rgb(5, 94, 136))",
            },
            {
              title: "Constitution:",
              content:
                "5. No official or member of the organization will be allowed to use it for personal promotion or objectives.\n6. Any member who fails to pay the membership fee for five consecutive months may have their membership terminated.\n7. Every member has the right to audit the accounts whenever they wish.\n8. The foundation has the authority to expel anyone found violating the constitution or working against the interests of the organization.",
              bgColor: "linear-gradient(to bottom, rgb(236, 6, 102), rgb(236, 6, 102))",
            },
          ].map((box, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "300px",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
                  background: box.bgColor,
                }}
              >
                <Typography
                  fontWeight={600}
                  fontFamily="Cambria"
                  sx={{ mb: 1, color: "white" }}
                >
                  {box.title}
                </Typography>
                <Typography
                  fontSize={12}
                  sx={{ fontFamily: "Cambria", color: "white" }}
                >
                  {box.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Objectives and Goals */}
        <Box
          sx={{
            mt: 4,
            px: 2,
            py: 3,
            width: "90%",
            maxWidth: "1200px",
            borderRadius: 2,
            bgcolor: "lightgray",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography
            fontWeight={600}
            fontFamily="Cambria"
            sx={{ mb: 2, color: "black" }}
          >
            Objectives and Goals:
          </Typography>
          <Typography
            fontSize={12}
            sx={{ fontFamily: "Cambria", color: "black" }}
          >
            1.  <strong>Organizing Workshops:</strong> Conduct workshops on the themes of education and training to introduce the younger generation to the teachings of the Quran and the life of the Ahlul Bayt.<br />
            2.  <strong>Promoting Values:</strong> Foster religious, intellectual, moral, and spiritual values in the youth to cultivate righteous individuals.<br />
            3.  <strong>Support for Needy Children:</strong> Provide as much assistance as possible for the education and training of underprivileged and deserving children, enabling them to become self-reliant.<br />
            4.  <strong>Scholarships for Talented Students:</strong> Facilitate admission for capable and talented students into prestigious institutions, both domestically and internationally, through scholarships.<br />
            5.  <strong>Strengthening the Economic System:</strong> Establish various trade centers and committees to enhance the economic system.<br />
            6.  <strong>Establishing Units and Collaboration:</strong> Form units and foster collaboration and connections at national and international levels to support religious understanding.<br />
            7.  <strong>National Protection:</strong> Safeguard the country's educational, cultural, economic, touristic, and geographical boundaries.<br />
            8.  <strong>Promoting Human Values:</strong> Promote human values and live a peaceful life, setting aside sectarian and religious differences.<br />
            9.  <strong>Educational and Study Tours:</strong> Organize educational and study tours and workshops to help the new generation learn from their ancestors and history while shaping a bright future.<br />
            10. <strong>Developing Potential:</strong> Raise awareness among people to create environments that nurture the abilities of the younger generation.<br />
            11. <strong>Collaborating with Welfare Organizations:</strong> Partner with various welfare organizations to address fundamental needs, particularly educational ones, and resolve challenges to the fullest extent.<br />
            12. <strong>Supporting Deserving Students:</strong> Assist underprivileged students in achieving excellence in fields such as medicine, engineering, politics, administration, education, and economics, empowering them to serve society.<br />
            13. <strong>Establishing Educational Institutions:</strong> Set up institutions ranging from schools and madrasas to universities and seminaries, as well as vocational and technical training centers.<br />

          </Typography>
        </Box>

      </Grid>
      {/* organizational structure */}<Grid container spacing={2} mt={4} px={2}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        Membership
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        • <strong>Eligibility:</strong> Any student of an educational institution above matriculation level can become a member, provided they agree with the organization's aims and objectives.<br />
        • <strong>Commitment:</strong> Must pledge to abide by the organization's constitution.<br />
        • <strong>Qualities:</strong> Must be ethical, virtuous, intelligent, capable, and hardworking.<br />
        • <strong>Integrity:</strong> Should be honest and willing to make sacrifices for welfare activities.<br />
        • <strong>Supporter:</strong> Anyone who agrees with the organization's mission can become a supporter.<br />
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        Organizational Structure
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        <strong>Supervision (Nazarat)</strong> <br />
        • <strong>Role:</strong> The supervisory council will act as the guide and patron of the organization. <br />
        • <strong>Composition:</strong> Comprises religious scholars and subject matter experts. <br />
        • <strong>Authority:</strong> Has the power to formulate laws. <br />
        • <strong>Agreement:</strong> Members must agree with the mission. <br />
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        Unit, Division, Center
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        <strong>Unit:</strong> A unit can be established in any educational institution or area with minimum 8 to 10 eligible members as mentioned. <br />
        <strong>Division:</strong> Any administratively divided district will be considered a division. <br />
        <strong>Center:</strong> The headquarter of the organization will be in Roundu, with its jurisdiction covering all other regions.
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        Commitment
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        • <strong>Educational Progress:</strong> Implements practical steps to raise educational standards.<br />
        • <strong>Study Circles:</strong> Organizes study circles.<br />
        • <strong>Pre-Board System:</strong> Establishes a pre-board system.<br />
        • <strong>Competitions:</strong> Hosts quiz competitions.<br />
        • <strong>Seminars:</strong> Elevates intellectual and academic awareness through seminars and conferences.<br />
      </Typography>
    </Box>
  </Grid>
</Grid>
<Typography mt={4} fontSize={20} fontWeight={600}  sx={{ fontFamily: "Cambria", color: "black" ,ml:{xs:1,sm:2,md:3,lg:40,xl:5} }}> Office bearers are responsible for the smooth running of the organization.</Typography>
<Grid container spacing={2} mt={4} px={2}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        President
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        • <strong>Responsibility:</strong> Safeguards the mission and objectives.<br />
        • <strong>Accountability:</strong> Responsible for the organization's management and performance.<br />
        • <strong>Membership Decisions:</strong> Holds authority to accept or reject membership.<br />
        • <strong>Disciplinary Actions:</strong> Has the right to expel any member for violating the constitution.<br />
        • <strong>Oversight:</strong> All office bearers are accountable to the president, but they have the right to provide constructive feedback.<br />
        • <strong>Election:</strong> Chosen by the supervisory council and divisional presidents.<br />
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        Vice President
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        • <strong>Role in Absence:</strong> Holds complete authority in the president's absence.<br />
        • <strong>Training Duties:</strong> Responsible for training affairs under supervision.<br />
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        General Secretary
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        • <strong>Records:</strong> Responsible for maintaining and submitting records.<br />
        • <strong>Reports:</strong> Must present an annual report.<br />
        • <strong>Communication:</strong> Maintains contact with all divisions.<br />
        • <strong>Event Management:</strong> Responsible for managing all meetings.<br />
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ height: '100%' }}>
      <Typography fontWeight={600} fontFamily="Cambria" sx={{ mb: 2, color: "black" }}>
        Finance Secretary
      </Typography>
      <Typography fontSize={12} sx={{ fontFamily: "Cambria", color: "black" }}>
        • <strong>Financial Duties:</strong> Collects monthly finances.<br />
        • <strong>Membership System:</strong> Establishes a membership system.<br />
        • <strong>Audits:</strong> Responsible for conducting audits of officials.<br />
        • <strong>Business Initiatives:</strong> Establishes business centers.<br />
        • <strong>Budgeting:</strong> Prepares annual and monthly budgets.<br />
      </Typography>
    </Box>
  </Grid>
</Grid>


    </>
  );
};

export default AboutUs;