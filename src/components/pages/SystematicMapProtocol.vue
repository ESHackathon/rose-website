<template>
  <v-layout row>
    <v-flex sm12 md8 offset-md2>
      <h3 class="display-3">Systematic Map Protocol</h3>
      <v-divider class="my-3"></v-divider>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step step="1" :complete="e6 > 1">
          Title
          <small>The title must indicate that it is a systematic review protocol, and must indicate if it is an
            update/amendment: e.g. "A systematic review update protocol...".
          </small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Title"
              v-model="title"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>
          <v-btn color="primary" @click.native="e6 = 2">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="2" :complete="e6 > 2">
          Type of Review
          <small>Select one of the following types of review: systematic review, systematic review update, systematic
            review amendment, systematic review from a systematic map.
          </small>
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-select
            label="Type Of Review"
            v-model="typeOfReview"
            :items="typeOfReviewOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="3" :complete="e6 > 3">
          Author Contracts
          <small>The full names, institutional addresses, and email addresses for all authors must be provided.</small>
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-select
            label="Authors Contracts"
            v-model="authorsContracts"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="4" :complete="e6 > 4">
          Abstract
          <small>Abstract must not exceed 350 words and must include two sections 1) Background, the context and purpose
            of the review, including the review question; 2) Methods, how the review will be conducted and the outputs
            that are expected (specifically mention search strategy, inclusion criteria, critical appraisal, data
            extraction and synthesis).
          </small>
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-select
            label="Abstract"
            v-model="abstract"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 5">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="5" :complete="e6 > 5">
          Background
          <small>Describe the rationale for the review in the context of what is already known. Protocol must indicate
            why this study was necessary and what it aims to contribute to the field.
          </small>
        </v-stepper-step>
        <v-stepper-content step="5">
          <v-select
            label="Background "
            v-model="background"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 6">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="6" :complete="e6 > 6">
          Stakeholder Agreement
          <small>The planned/actual role of stakeholders throughout the review process (e.g. in the formulation of the
            question) must be described and explained (using a broad definition of ‘stakeholder’, including e.g.
            researchers, funders and other decision-makers)
          </small>
        </v-stepper-step>
        <v-stepper-content step="6">
          <v-select
            label="Stakeholder Agreement"
            v-model="stakeholderAgreement"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 7">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="7" :complete="e6 > 7">
          Objectives of the Review
        </v-stepper-step>
        <v-stepper-content step="7">
          <h3 class="display3">Objectives</h3>
          <p>Describe the primary question and secondary questions (when applicable).</p>
          <v-select
            label="Objectives"
            v-model="objectivesOfTheReview.objectives"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <h3 class="display3">Definitions of the Question Component</h3>
          <p>Break down and summarise question key elements e.g. population, intervention(s)/exposure(s), comparator(s), and outcome(s).</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Definitions of the Question Component"
              v-model="objectivesOfTheReview.definitionsOfTheQuestionComponent"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>
          <v-btn color="primary" @click.native="e6 = 8">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="8" :complete="e6 > 8">
          Searches
        </v-stepper-step>
        <v-stepper-content step="8">
          <h3 class="display3">Search strategy</h3>
          <p>Detail the planned search strategy to be used, including: database names accessed, institutional subscriptions (or date ranges subscribed for each database), search options (e.g. ‘topic words’ or ‘full text’ search facility), efforts to source grey literature, other sources of evidence (e.g. hand searching, calls for evidence/submission of evidence by stakeholders).</p>
          <v-select
            label="Search Strategy"
            v-model="searches.searchStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Search String</h3>
          <p>Provide Boolean-style full search string and state the platform for which the string is formatted (e.g. Web of Science format).</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Search String"
              v-model="searches.searchString"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Languages Bibliographic Databases</h3>
          <p>List languages to be used in bibliographic database searches.</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Languages Bibliographic Databases"
              v-model="searches.languagesBibliographicDatabases"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Languages Grey Literature</h3>
          <p>List languages to be used in organizational websites searches and web-based search engines.</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Languages Grey Literature"
              v-model="searches.languagesGreyDatabases"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Bibliographic Databases</h3>
          <p>Provide the number of bibliographic databases to be searched.</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Bibliographic Databases"
              v-model="searches.bibliographicDatabases"
              mask="##"
              placeholder="Type a two digits number"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Web – Based Search Engines</h3>
          <p>Provide the number of web – based search engines to be searched.</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Web – Based Search Engines"
              v-model="searches.webSearchEngines"
              mask="##"
              placeholder="Type a two digits number"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Organisational Websites</h3>
          <p>Provide the number of organisational websites to be searched.</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Organisational Websites"
              v-model="searches.organisationalWebsites"
              mask="##"
              placeholder="Type a two digits number"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Estimating the Comprehensiveness of the Search</h3>
          <p>Describe the process by which the comprehensiveness of the search strategy was assessed (i.e. list of benchmark articles).</p>
          <v-select
            label="Estimating the Comprehensiveness of the Search"
            v-model="searches.estimatingTheComprehensivenessOfTheSearch"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Search Update</h3>
          <p>Describe any plans to update the searches during the conduct of the review.</p>
          <v-select
            label="Search Update"
            v-model="searches.searchUpdate"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <v-btn color="primary" @click.native="e6 = 9">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="9" :complete="e6 > 9">
          Article Screening and Study Inclusion Criteria
        </v-stepper-step>
        <v-stepper-content step="9">
          <h3 class="display3">Screening Strategy</h3>
          <p>Describe the methodology for screening articles/studies for relevance/eligibility.</p>
          <v-select
            label="Screening Strategy"
            v-model="articleScreeningAndStudyInclusionCriteria.screeningStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Consistency Checking</h3>
          <p>Describe clearly the process for checking consistency of decisions including the levels at which consistency checking will be undertaken and estimated proportion of articles/studies that will be screened and checked for consistency by two or more reviewers (e.g. Titles (10%), abstracts (10%), full text (10%)).</p>
          <v-select
            label="Consistency Checking"
            v-model="articleScreeningAndStudyInclusionCriteria.consistencyChecking"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Inclusion Criteria</h3>
          <p>Describe the inclusion criteria used to assess relevance of identified articles/studies. These must be broken down into the question key elements (e.g. relevant subject(s), intervention(s)/exposure(s), comparator(s), outcomes, study design(s)) and any other restrictions (e.g. date ranges or languages).</p>
          <v-select
            label="Inclusion Criteria"
            v-model="articleScreeningAndStudyInclusionCriteria.inclusionCriteria"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Reason for Exclusion</h3>
          <p>State that you will provide a list of articles excluded at full text with reasons for exclusion..</p>
          <v-select
            label="Reason for Exclusion"
            v-model="articleScreeningAndStudyInclusionCriteria.reasonsForExclusion"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <v-btn color="primary" @click.native="e6 = 10">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="10" :complete="e6 > 10">
          Critical Appraisal
        </v-stepper-step>
        <v-stepper-content step="10">
          <h3 class="display3">Critical Appraisal Strategy</h3>
          <p>Describe here the method you propose for critical appraisal of study validity (including assessment of individual studies and the evidence base as a whole).</p>
          <v-select
            label="Critical Appraisal Strategy"
            v-model="criticalAppraisal.criticalAppraisalStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Critical Appraisal Strategy</h3>
          <p>Describe how the information from critical appraisal will be used in synthesis.</p>
          <v-select
            label="Critical Appraisal Used in Synthesis"
            v-model="criticalAppraisal.criticalAppraisalUsedInSynthesis"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Consistency Checking</h3>
          <p>Describe how repeatability of critical appraisal of study validity will be tested.</p>
          <v-select
            label="Consistency Checking"
            v-model="criticalAppraisal.consistencyChecking"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <v-btn color="primary" @click.native="e6 = 11">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="11" :complete="e6 > 11">
          Data Extraction
        </v-stepper-step>
        <v-stepper-content step="11">
          <h3 class="display3">Meta-data Extraction and Coding strategy</h3>
          <p>Describe the method for meta-data extraction and coding for studies (potentially providing forms/data sheets (ideally piloted), list if variables to be extracted as meta-data and those that will be coded).</p>
          <v-select
            label="Meta-data Extraction and Coding strategy"
            v-model="dataExtraction.metaDataExtractionAndCodingStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Data Extraction Strategy</h3>
          <p>Describe the method for extraction of qualitative and/or quantitative study findings (potentially providing forms/data sheets (ideally piloted)).</p>
          <v-select
            label="Data Extraction Strategy"
            v-model="dataExtraction.dataExtractionStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Approaches to Missing Data</h3>
          <p>Describe any processes for obtaining and confirming missing or unclear information or data from authors..</p>
          <v-select
            label="Approaches to Missing Data"
            v-model="dataExtraction.approachesToMissingData"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Consistency Checking</h3>
          <p>Describe how repeatability of the meta-data/data extraction process will be tested.</p>
          <v-select
            label="Consistency Checking"
            v-model="dataExtraction.consistencyChecking"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <v-btn color="primary" @click.native="e6 = 12">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="12" :complete="e6 > 12">
          Potential Effect Modifiers/Reasons for Heterogeneity
          <small>Provide a list of and justification for the effect modifiers /reasons for heterogeneity that will be considered in the review. Also provide details of how the list was compiled (including consultation of external experts). </small>
        </v-stepper-step>
        <v-stepper-content step="12">
          <v-select
            label="Potential Effect Modifiers/Reasons for Heterogeneity"
            v-model="potentialEffectModifiersForHeterogeneity"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 13">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="13" :complete="e6 > 13">
          Data Synthesis and Presentation
        </v-stepper-step>
        <v-stepper-content step="13">
          <h3 class="display3">Type of Synthesis</h3>
          <p>State the type of synthesis conducted as part of the systematic review (narrative only, narrative and quantitative, narrative and qualitative, narrative, qualitative and quantitative, narrative and mixed-methods).</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Type of synthesis"
              v-model="dataSynthesisAndPresentation.typeOfSynthesis"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-form>

          <h3 class="display3">Narrative Synthesis Strategy</h3>
          <p>Describe methods to be used for narratively synthesising the evidence base in the form of descriptive statistics, tables (including any map databases) and figures.</p>
          <v-select
            label="Narrative Synthesis Strategy"
            v-model="dataSynthesisAndPresentation.narrativeSynthesisStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Quantitative Synthesis Strategy</h3>
          <p>If data are appropriate for quantitative synthesis, describe planned methods for calculating effect sizes, methods for handling complex data, statistical methods for combining data from individual studies, and any planned exploration of heterogeneity (e.g. sensitivity analysis, subgroup analysis and meta-regression). If all studies may not be selected for synthesis explain criteria for selection (e.g. incomplete or missing information).</p>
          <v-select
            label="Quantitative Synthesis Strategy"
            v-model="dataSynthesisAndPresentation.quantitativeSynthesisStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Qualitative Synthesis Strategy</h3>
          <p>Describe methods to be used for synthesising qualitative data and justify your methodological choice. Describe if and how you plan to analyse subgroups/subsets of data. If all studies may not be selected for synthesis explain criteria for selection (e.g. incomplete or missing information).</p>
          <v-select
            label="Qualitative Synthesis Strategy"
            v-model="dataSynthesisAndPresentation.qualitativeSynthesisStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Other Synthesis Strategies</h3>
          <p>Describe any other approaches to be used for synthesising data or combining qualitative and quantitative synthesis (e.g. mixed-methods) and justify your methodological choice.</p>
          <v-select
            label="Other Synthesis Strategies"
            v-model="dataSynthesisAndPresentation.otherSynthesisStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Assessment of Risk of Publication bias</h3>
          <p>Describe planned methods for examining the possible influence of publication bias on the synthesis.</p>
          <v-select
            label="Assessment of Risk of Publication bias"
            v-model="dataSynthesisAndPresentation.assessmentOfRiskOfPublicationBias"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Knowledge Gap and Cluster Identification Strategy</h3>
          <p>Describe the methods to be used to identify and/or prioritise key knowledge gaps (unrepresented or underrepresented subtopics that warrant further primary research) and knowledge clusters (well-represented subtopics that are amenable to full synthesis via systematic review).</p>
          <v-select
            label="Knowledge Gap and Cluster Identification Strategy"
            v-model="dataSynthesisAndPresentation.knowledgeGapAndClusterIdentificationStrategy"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <h3 class="display3">Demonstrating Procedural Independence</h3>
          <p>Describe the role of systematic reviewers (who have also authored articles to be considered within the review) in decisions regarding inclusion or critical appraisal of their own work.</p>
          <v-select
            label="Demonstrating Procedural Independence"
            v-model="dataSynthesisAndPresentation.demonstratingProceduralIndependence"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>

          <v-btn color="primary" @click.native="e6 = 14">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="14" :complete="e6 > 14">
          Declarations
        </v-stepper-step>
        <v-stepper-content step="14">
          <h3 class="display3">Competing Interests</h3>
          <p>Describe of any financial or non-financial competing interests that the review authors may have. </p>
          <v-select
            label="Competing Interests"
            v-model="declarations.competingInterests"
            :items="checklistOptions"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-btn color="primary" @click.native="e6 = 15">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="15" :complete="e6 > 15">
          Submit Form
          <small>Already we will generate your .pdf report</small>
        </v-stepper-step>
        <v-stepper-content step="15">
          <v-btn
            @click="submit"
            :disabled="!valid"
          >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script>
  import download from 'downloadjs'

  export default {
    name: 'SystematicReviewProtocol',
    data () {
      return {
        message: 'Hi Vue!',
        e6: 1,
        valid: true,
        title: '',
        titleRules: [
          v => !!v || 'Title is required',
          v => (v && v.length <= 10) || 'Title must be less than 10 characters'
        ],
        typeOfReview: null,
        authorsContracts: false,
        abstract: false,
        background: false,
        stakeholderAgreement: false,
        objectivesOfTheReview: {
          objectives: '',
          definitionsOfTheQuestionComponent: ''
        },
        searches: {
          searchStrategy: '',
          searchString: '',
          languagesBibliographicDatabases: '',
          languagesGreyDatabases: '',
          bibliographicDatabases: '',
          webSearchEngines: '',
          organisationalWebsites: '',
          estimatingTheComprehensivenessOfTheSearch: '',
          searchUpdate: ''
        },
        articleScreeningAndStudyInclusionCriteria: {
          screeningStrategy: '',
          consistencyChecking: '',
          inclusionCriteria: '',
          reasonsForExclusion: ''
        },
        criticalAppraisal: {
          criticalAppraisalStrategy: '',
          criticalAppraisalUsedInSynthesis: '',
          consistencyChecking: ''
        },
        dataExtraction: {
          metaDataExtractionAndCodingStrategy: '',
          dataExtractionStrategy: '',
          approachesToMissingData: '',
          consistencyChecking: ''
        },
        potentialEffectModifiersForHeterogeneity: '',
        dataSynthesisAndPresentation: {
          typeOfSynthesis: '',
          narrativeSynthesisStrategy: '',
          quantitativeSynthesisStrategy: '',
          qualitativeSynthesisStrategy: '',
          otherSynthesisStrategy: '',
          assessmentOfRiskOfPublicationBias: '',
          knowledgeGapAndClusterIdentificationStrategy: '',
          demonstratingProceduralIndependence: ''
        },
        declarations: {
          competingInterests: ''
        },
        typeOfReviewOptions: [
          'Systematic Review',
          'Systematic Review Update',
          'Systematic Review Amendment',
          'Systematic Review from Systematic Map'
        ],
        checklistOptions: [
          'Yes',
          'No',
          'N/A'
        ]
      }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          const data = {
            title: this.title,
            typeOfReview: this.typeOfReview,
            authorsContracts: this.authorsContracts,
            background: this.background,
            stakeholderAgreement: this.stakeholderAgreement,
            objectivesOfTheReview: this.objectivesOfTheReview,
            searches: this.searches,
            articleScreeningAndStudyInclusionCriteria: this.articleScreeningAndStudyInclusionCriteria,
            dataExtraction: this.dataExtraction,
            potentialEffectModifiersForHeterogeneity: this.potentialEffectModifiersForHeterogeneity,
            dataSynthesisAndPresentation: this.dataSynthesisAndPresentation
          }
          this.axios.post('http://127.0.0.1:5000/', data, {
            responseType: 'blob',
            headers: {
              'Accept': 'application/pdf'
            }
          }).then((resp) => {
            download(resp.data, 'Report.pdf')
          }).catch((error) => {
            console.log(error.response)
          })
        }
      },

      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
